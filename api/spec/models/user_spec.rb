require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validates presence" do
    context "全カラムの値を指定しているとき" do
      let(:user) { create(:user) }

      it "userのレコードが作成される" do
        expect(user).to be_valid
      end
    end

    context "emailを指定していないとき" do
      let(:user) { build(:user, email: nil) }

      it "エラーになる" do
        user.valid?
        expect(user.errors.messages[:email]).to include "を入力してください"
      end
    end

    context "passwordを指定していないとき" do
      let(:user) { build(:user, password: nil) }

      it "エラーになる" do
        user.valid?
        expect(user.errors.messages[:password]).to include "を入力してください"
      end
    end
  end

  describe "validates uniqueness" do
    context "保存されたメールアドレスが指定されたとき" do
      let(:user1) { create(:user) }
      let(:user2) { build(:user, email: user1.email) }

      it "エラーになる" do
        user2.valid?
        expect(user2.errors.messages[:email]).to include "はすでに存在します"
      end
    end

    context "保存されたユーザーネームが指定されたとき" do
      let(:user1) { create(:user) }
      let(:user2) { build(:user, username: user1.username) }

      it "エラーになる" do
        user2.valid?
        expect(user2.errors.messages[:username]).to include "はすでに存在します"
      end
    end
  end

  describe "validates length" do
    context "パスワードが8文字未満の場合" do
      let(:user) { build(:user, password: 'pass') }
      it "エラーになる" do
        user.valid?
        expect(user.errors.messages[:password]).to include "は8文字以上で入力してください"
      end
    end

    context "名前が51文字以上のとき" do
      let(:user) { build(:user, name: 'a' * 51) }

      it "エラーになる" do
        user.valid?
        expect(user.errors.messages[:name]).to include "は50文字以内で入力してください"
      end
    end

    context "住所が31文字以上のとき" do
      let(:user) { build(:user, address: 'a' * 31) }

      it "エラーになる" do
        user.valid?
        expect(user.errors.messages[:address]).to include "は30文字以内で入力してください"
      end
    end

    context "ユーザーネームが31文字以上の場合" do
      let(:user) { build(:user, username: 'a' * 31) }
      it "エラーになる" do
        user.valid?
        expect(user.errors.messages[:username]).to include "は30文字以内で入力してください"
      end
    end
  end

  describe "validates regular expression" do
    context "パスワードが制御文字と半角を除いたASCII文字の場合" do
      let(:user) { build(:user, password: 'pass_*&^%word') }
      it "正常に保存できる" do
        expect(user).to be_valid
      end
    end

    context "パスワードが制御文字と半角を除いたASCII文字以外を含む場合" do
      let(:user) { build(:user, password: 'a' * 7 + 'あ') }
      it "エラーになる" do
        user.valid?
        expect(user.errors.messages[:password]).to include "は不正な値です"
      end
    end

    context "ユーザーネームが半角英数字とアンダーバーのみの場合" do
      let(:user) { create(:user) }
      it "正常に更新できる" do
        user.update(username: 'test_name')
        expect(user).to be_valid
      end
    end

    context "ユーザーネームが半角英数字とアンダーバー以外を含む場合" do
      let(:user) { create(:user) }
      it "正常に更新できない" do
        user.update(username: 'a' * 7 + 'あ')
        expect(user.errors.messages[:username]).to include "は不正な値です"
      end
    end
  end

  describe 'ActiveStorage - avatar' do
    let(:user) { create(:confirmed_user, :with_avatar) }
    it 'ユーザーにアタッチされている' do
      expect(user.avatar.attached?).to eq true
    end
  end

  describe "ActiveStorage - avatarが不正な時" do
    let(:user) { create(:confirmed_user, :with_avatar) }
    it "ユーザーにアタッチされない" do
      file_path = Rails.root.join('spec', 'fixtures', 'test.txt')
      file = fixture_file_upload(file_path, 'text/plain')
      user.avatar.detach
      user.update(avatar: file)
      expect(user.valid?).to eq false
    end
  end
end

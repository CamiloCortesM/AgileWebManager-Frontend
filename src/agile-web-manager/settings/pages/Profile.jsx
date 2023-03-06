import { SettingsLayout } from "../layout/SettingsLayout";
import "./style.css";

export default function Profile() {
  return (
    <SettingsLayout>
      <div className="profile">
        <div className="profile__desc">
          <h1 className="profile__desc--title">Profile</h1>
          <p className="profile__desc--description">
            view your personal information, if you want to change anything contact the administrator
          </p>
        </div>
        <div className="profile__header">
          <h2 className="profile__header--title">Profile icon</h2>
          <div className="profile__header__image">
            <div className="profile__header__image--top"></div>
            <div className="profile__header__image--bottom"></div>
            <div className="profile__header__image--icon">D</div>
          </div>
        </div>
        <div className="profile__body">
          <h2 className="profile__body--title">About you</h2>
          <div className="profile__body__about">
            <div className="profile__body__about--item">
              <h3 className="about__title">full name</h3>
              <p className="about__content">Camilo Cortes</p>
            </div>
            <div className="profile__body__about--item">
              <h3 className="about__title">email</h3>
              <p className="about__content">camilo@gmail.com</p>
            </div>
            <div className="profile__body__about--item">
              <h3 className="about__title">role</h3>
              <p className="about__content">admin</p>
            </div>
            <div className="profile__body__about--item">
              <h3 className="about__title">phone</h3>
              <p className="about__content">+573209932148</p>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
}

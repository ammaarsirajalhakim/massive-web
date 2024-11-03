import { useState } from 'react'
import '../css/logpage.css'
import backgroundImage from "../assets/background_2.jpg";
import Icon from "../assets/AGRI_SYNERGY.png"
import google_icon from "../assets/google_icon.png"

const Register = () => {
    return (
        <div className="login-container">
            <div className="image-container">
                <img src={backgroundImage} alt="Farmer" className="side-image" />
            </div>
            <div className="form-container">
                <img src={Icon} alt="Logo Agri Synergy" className="logo" /> {/* Ganti dengan path logo kamu */}
                <h2>Bergabunglah dengan Komunitas Kami</h2>
                <p className='keterangan'>Dapatkan Dukungan, Pelajari Lebih Dalam tentang Pertanian</p>
                <button className="google-login"><img src={google_icon} alt="google_icon" /> Login with Google</button>
                <div className="or-container">
                    <div className="line"></div>
                    <p className="or-text">OR</p>
                    <div className="line"></div>
                </div>
                <p className='title_input_field'>Alamat Email</p>
                <input type="email" placeholder="Masukkan alamat email" className="input-field" />
                <p className='title_input_field'>Kata Sandi</p>
                <input type="password" placeholder="Masukkan kata sandi" className="input-field" />
                <button className="submit-button">Masuk</button>
                <button className="signup-button"> Belum punya akun? Daftar disini </button>
                <p className="forgot-password">Lupa Sandi?</p>
            </div>
        </div>
    )
}

export default Register
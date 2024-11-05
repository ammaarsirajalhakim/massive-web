import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Logo from '../assets/AGRI_SYNERGY.png';
import Kategori from '../assets/icons/kategori.png';
import Produk from '../assets/icons/produk.png';
import DetailSaldo from '../assets/icons/detail_saldo.png';
import PetaLahan from '../assets/icons/peta_lahan.png';
import Dropshipper from '../assets/icons/dropshipper.png';
import Logout from '../assets/icons/logout.png';
import '../css/sidebar.css';

const Sidebar = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('Kategori');

    useEffect(() => {
        switch (location.pathname) {
            case '/kategori':
                setActiveItem('Kategori');
                break;
            case '/produk':
                setActiveItem('Produk');
                break;
            case '/detail-saldo':
                setActiveItem('DetailSaldo');
                break;
            case '/peta-lahan':
                setActiveItem('PetaLahan');
                break;
            case '/dropshipper':
                setActiveItem('Dropshipper');
                break;
            case '/logout':
                setActiveItem('Logout');
                break;
            default:
                setActiveItem('Kategori'); 
        }
    }, [location.pathname]);

    return (
        <div className="sidebar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <hr className="separator" />

            <div className="menu">
                <ul>
                    <li>
                        <Link
                            to="/kategori"
                            className={activeItem === 'Kategori' ? 'active' : ''}
                        >
                            <img src={Kategori} alt="Kategori" /> Kategori
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/produk"
                            className={activeItem === 'Produk' ? 'active' : ''}
                        >
                            <img src={Produk} alt="Produk" /> Produk
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/detail-saldo"
                            className={activeItem === 'DetailSaldo' ? 'active' : ''}
                        >
                            <img src={DetailSaldo} alt="Detail Saldo" /> Detail Saldo
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/peta-lahan"
                            className={activeItem === 'PetaLahan' ? 'active' : ''}
                        >
                            <img src={PetaLahan} alt="Peta Lahan" /> Peta Lahan
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dropshipper"
                            className={activeItem === 'Dropshipper' ? 'active' : ''}
                        >
                            <img src={Dropshipper} alt="Dropshipper" /> Dropshipper
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/logout"
                            className={activeItem === 'Logout' ? 'active' : ''}
                        >
                            <img src={Logout} alt="Logout" /> Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

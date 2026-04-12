import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    try {
      login(form);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="login-badge">Bienvenido</span>
          <h1>Iniciar Sesión</h1>
          <p>Ingresa a tu cuenta para continuar.</p>
        </div>

        <form className="login-form" onSubmit={onSubmit}>
          <div className="input-group">
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              required
              value={form.email}
              onChange={onChange}
            />
          </div>

          <div className="input-group">
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              required
              value={form.password}
              onChange={onChange}
            />
          </div>

          <button className="login-btn" type="submit">
            <span>Entrar</span>
            <span className="login-btn-icon">→</span>
          </button>

          {error && <p className="error-message">{error}</p>}
        </form>

        <p className="login-register">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </section>
  );
}
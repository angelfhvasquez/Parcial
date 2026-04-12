import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Register.css';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      register(form);
      setSuccess('Registrado con éxito!');
      setTimeout(() => navigate('/login'), 900);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="register-page">
      <div className="register-card">
        <div className="register-header">
          <span className="register-badge">Crear cuenta</span>
          <h1>Registro</h1>
          <p>Crea tu cuenta para ordenar rápido.</p>
        </div>

        <form className="register-form" onSubmit={onSubmit}>
          <div className="input-group">
            <input
              name="name"
              type="text"
              placeholder="Nombre completo"
              required
              value={form.name}
              onChange={onChange}
            />
          </div>

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

          <button className="register-btn" type="submit">
            <span>Registrar</span>
            <span className="register-btn-icon">→</span>
          </button>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>

        <p className="register-login">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </section>
  );
}
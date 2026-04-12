import "./Blog.css";

const posts = [
  {
    id: 1,
    category: "Proceso",
    date: "01 Abril 2026",
    title: "Cómo creamos nuestras hamburguesas",
    description: "Detrás de cada burger hay un proceso de sabor, técnica e ingredientes seleccionados.",
    image: "https://img.freepik.com/fotos-premium/chef-cocina-hamburguesas-restaurante_302872-608.jpg"
  },
  {
    id: 2,
    category: "Recomendaciones",
    date: "18 Marzo 2026",
    title: "Las mejores combinaciones del mes",
    description: "Descubre los combos favoritos del público y nuevas mezclas que no te puedes perder.",
    image: "https://phantom-elmundo.unidadeditorial.es/83c75dc1b439edfb55ca73142565a12d/crop/123x102/2889x1946/resize/1200/f/jpg/assets/multimedia/imagenes/2023/05/25/16850278533720.jpg"
  },
  {
    id: 3,
    category: "Eventos",
    date: "10 Marzo 2026",
    title: "Eventos Juicy Nights",
    description: "Vive noches especiales con hamburguesas, música, promociones y un ambiente único.",
    image: "https://tofuu.getjusto.com/orioneat-local/resized2/r3rzWeG2wgKmsuxkz-x-300.webp"
  }
];

function Blog() {
  return (
    <section className="blog-page">
      <div className="blog-header">
        <span className="blog-badge">Blog Juicy Lucy</span>
        <h1>Historias, sabor y novedades</h1>
        <p>
          Conoce más sobre nuestras hamburguesas, recomendaciones del mes y
          eventos especiales.
        </p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.id}>
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} />
            </div>

            <div className="blog-card-content">
              <div className="blog-meta">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              <h2>{post.title}</h2>
              <p>{post.description}</p>

              <a href="#" className="blog-link">
                Leer más <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;

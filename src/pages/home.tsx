import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
function MovieCard(props: { movieId: string, className?: string }) {
  return (
    <div className={cn("flex flex-col", props.className)}>
      <Link to={`/movie/${props.movieId}`}><div className="h-96 bg-gradient-to-b from-gray-300 to-gray-400 mb-6 shadow-lg transition duration-300 hover:scale-105"></div></Link>
      <div className="text-center"><Link to={`/movie/${props.movieId}`} className="hover:text-blue-600">Шматрица (2020)</Link></div>
      <div className="text-center text-slate-500">Рейтинг: 8.96</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="mt-10 w-full flex flex-col">
        <p className="text-center w-full text-xl">Популярно сегодня</p>
        <div className="w-full mt-10 grid grid-cols-1 gap-4 lg:grid-cols-5">
        { [...Array(5)].map((_, idx) => <MovieCard movieId={'' + idx} />)}
        </div>
      </section>
    </>
  );
}

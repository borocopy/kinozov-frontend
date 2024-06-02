import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button"
import Review, { ReviewItem } from '@/pages/movie/components/review';

const reviewTest: ReviewItem = {
  user: "Дима Пяткин",
  createdAt: new Date(),
  content: `«Шматрица» — признанный шедевр жанра и, определённо, лучшая работа Пучкова-Гоблина. С такого безапелляционного заявления начну свою коротенькую рецензию. Просто не вижу смысла долго распинаться о том, что для зрителя и так очевидно. Особенно хочется подчеркнуть, что перевод выстрелил в своё время, а с той поры и воды много утекло, и вкусы успели поменяться, но в качестве «ностальгического кино» он и сейчас вполне смотрится. Далее по пунктам.`
}

export default function Movie() {
  const movieId = useParams<{movieId: string}>().movieId;
  return (
    <>
      <p className="text-center">Movie {movieId}</p>
      <section className="flex flex-row w-full mb-20">
        <div className="w-1/5 mr-10">
          <div className="w-full flex flex-col">
            <div className="h-96 bg-gradient-to-r from-sky-500 to-indigo-500 mb-6 shadow-lg"></div>
            <div className="text-center">Шматрица (2020)</div>
            <div className="text-center text-slate-500">Рейтинг: 8.96</div>
          </div>
        </div>
        <div className="w-3/5">
          <p className="mb-5">
            <span className="font-bold">Описание: </span>Группа умалишённых,
            совершивших побег из дурдома особого режима, уверенно полагает себя
            советскими партизанами, а санитаров — гестаповцами. Возглавляет
            группу матёрый шизофреник Матвей. Амбулаторный больной Нео страдает
            лёгким расстройством психики. Но сбежавшие из дурдома граждане
            объясняют ему, что на самом деле всё не так, как ему кажется. Что на
            самом деле кругом фашисты. И что война до сих пор так и не
            закончилась. Судьба мира и фашистской матрицы — в руках надежды
            Сопротивления, симпатичного штурмбанфюрера Нео!
          </p>
          <p className="mb-5">
            <span className="font-bold">Режиссер: </span>Дмитрий (Гоблин) Пучков
          </p>
          <p className="mb-5">
            <span className="font-bold">Актерский состав: </span>Киану Ривз,
            Лоренс Фишбёрн, Кэрри-Энн Мосс, Хьюго Уивинг и др.
          </p>
        </div>
      <Button>Добавить отзыв</Button>
      </section>
      <section className="flex flex-col w-full mb-10">
        <div className="text-2xl mb-5">Мнение многоуважаемой публики</div>
        <Review item={reviewTest} />
        <div className="my-5 text-center text-slate-500 cursor-pointer hover:text-blue-600">
          Загрузить еще
        </div>
      </section>
    </>
  );
}

export interface ReviewItem {
  user: string;
  createdAt: Date;
  content: string;
  rating: number;
}
export default function Review({ item }: { item: ReviewItem }) {
  return (
    <div className="flex flex-col w-full pl-4 border-l-4 border-slate-300">
      <div>
        <span className="font-bold">{item.user}</span>{" "}
        <span className="text-slate-500">{item.createdAt.toLocaleString()}</span>
      </div>
      <div>
        { item.content.split("\n").map(text => <p className="mb-5">{text}</p>) }
      </div>
    </div>
  );
}

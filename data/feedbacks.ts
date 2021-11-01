export interface Feedback {
  id: string;
  title: string;
  detail: string;
  votes: number;
  category: string;
  stage: string;
  //comments
}

const feedbacks: Feedback[] = [
  {
    id: "1",
    title: "Nie najlepsza",
    detail: "Słaba ksiązka, nie podoba mi się",
    votes: 3,
    category: "Feature",
    stage: "In progress",
  },
  {
    id: "2",
    title: "Całkiem fajna",
    detail: "Dobra lektura na jesienne wieczory",
    votes: 99,
    category: "Feature",
    stage: "Live",
  },
];

export default feedbacks;

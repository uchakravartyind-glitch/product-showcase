type Props = {
  name: string;
};

export default function Greeting({ name }: Props) {
  return <h2 className="greeting">Welcome, {name}! Find your next desk upgrade.</h2>;
}

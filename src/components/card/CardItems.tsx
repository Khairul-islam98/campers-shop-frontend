import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface ICardProps {
  _id: string;
  img: string;
  title: string;
  description: string;
  price: number;
}

const CardItems = ({ img, title, description, price, _id }: ICardProps) => {
  return (
    <div>
      <Card className="h-96">
        <CardContent className="pt-5">
          <div className="image-container">
            <img className="rounded-md magnifier" src={img} alt="" />
          </div>
        </CardContent>
        <div className="flex justify-between">
          <CardHeader>
            <CardTitle className="text-xl"> {title} </CardTitle>
            <CardDescription> {description.slice(0, 30)}... </CardDescription>
          </CardHeader>
          <CardFooter>
            <div>
              <p>${price} </p>
              <Link to={`/products/${_id}`}>
                <Button className="mt-2 border-blue-500" variant={"outline"}>
                  Details
                </Button>
              </Link>
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default CardItems;

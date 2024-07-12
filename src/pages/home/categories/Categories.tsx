import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import tents from '../../../assets/images/categories/Tents.jpg'
import backpacks from '../../../assets/images/categories/Backpacks.webp'
import cookware from '../../../assets/images/categories/Cookware.webp'
import sleeping from '../../../assets/images/categories/Sleeping Bags.jpg'
import footwear from '../../../assets/images/categories/Footwear.jpeg'
import accessories from '../../../assets/images/categories/accessories.avif'

const Categories = () => {
 

  const categories = [
    { id: 1, name: 'Tents', icon: tents },
    { id: 2, name: 'Backpacks', icon: backpacks },
    { id: 3, name: 'Cookware', icon: cookware },
    { id: 4, name: 'Sleeping Bags', icon: sleeping },
    { id: 5, name: 'Footwear', icon: footwear },
    { id: 6, name: 'Accessories', icon: accessories },
  ];

  return (
    <div className="mt-24 max-w-screen-xl mx-auto mb-5">
        <h2 className="text-2xl font-semibold  text-gray-800 mb-6">Product Categories</h2>
      <div className="grid grid-cols-1 p-4 md:p-0 md:grid-cols-3 gap-2">
        {categories.map((category) => (
          <div>
            <Card key={category.id} className="">
              <CardContent className="pt-5">
              <div className="image-container">
            <img className="rounded-md magnifier h-64 w-full" src={category.icon} alt="" />
          </div>
              </CardContent>
              <div>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {" "}
                    {category.name}{" "}
                  </CardTitle>
                </CardHeader>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues } from "react-hook-form";

const Search = ({ setQueryParams, queryParams }) => {
  const { register, handleSubmit } = useForm();
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("price:asc");

  const onSubmit = (data: FieldValues) => {
    const search = data.search;
    setQueryParams({ ...queryParams, search });
  };

  const handleClear = () => {
    setPrice("");
    setSort("");
    setQueryParams([]);
  };

  const handleFilterChange = (filterKey, value) => {
    setQueryParams({ ...queryParams, [filterKey]: value });
  };

  const toggleSort = () => {
    const newSort = sort === "price:asc" ? "price:desc" : "price:asc";
    setSort(newSort);
    handleFilterChange("sort", newSort);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3 py-4 flex flex-col md:flex-row gap-4 justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-sm items-center"
      >
        <Input
          className="focus-visible:ring-offset-0 rounded-r-none bg-gray-100"
          type="text"
          placeholder="Search here..."
          {...register("search")}
        />
        <Button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Button>
      </form>
      <div className="flex items-center justify-between gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-blue-500 font-inter">
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Filter by Price</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={price}
                    onValueChange={(value) => {
                      setPrice(value);
                      handleFilterChange("price", value);
                    }}
                  >
                    <DropdownMenuRadioItem value="0-150">
                      0-100
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="151-350">
                      101-150
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="351+">
                      151+
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Filter by Categories</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={queryParams.category}
                    onValueChange={(value) => {
                      handleFilterChange("category", value);
                    }}
                  >
                    <DropdownMenuRadioItem value="backpacks">
                      Backpacks
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="cookware">
                    Cookware
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="tents">
                    Tents
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="accessories">
                      Accessories
                    </DropdownMenuRadioItem>
                    {/* Add more categories as needed */}
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          onClick={handleClear}
          className=""
        >
          Clear
        </Button>
      </div>
      <div>
        <Button
          variant="outline"
          onClick={toggleSort}
          className=""
        >
          Sort: {sort === "price:asc" ? "High to Low" : "Low to High"}
        </Button>
      </div>
    </div>
  );
};

export default Search;

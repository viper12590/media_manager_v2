import TagList from "@/components/TagList";
import RandomItems from "@/components/RandomItems";
import TaggedItems from "@/components/TaggedItems";
import Item from "@/components/Item";
import FavouriteItems from "@/components/FavouriteItems";
import AllItems from "@/components/AllItems";

export default [
    {
        path: "/",
        component: RandomItems
    },
    {
        path: "/all",
        component: AllItems
    },
    {
        path: "/tags",
        component: TagList
    },
    {
        path: "/tags/:tag",
        component: TaggedItems
    },
    {
        path: "/items/:id",
        component: Item
    },
    {
        path: "/favourites",
        component: FavouriteItems
    }
]
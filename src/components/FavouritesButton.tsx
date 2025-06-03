import type { WeatherData } from "@/api/types"
import { useFavourite } from "@/hooks/useFavourite";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { toast } from "sonner";

interface FavouritesButtonProps {
    data: WeatherData;
}

const FavouritesButton = ({data}: FavouritesButtonProps) => {
   const { addFavourite, removeFavourite, isFavourite } = useFavourite();
   const isCurrentFavourite = isFavourite(data.coord.lat, data.coord.lon);

   const handleToggleFavourite = () => {
    if(isCurrentFavourite){
        removeFavourite.mutate(`${data.coord.lat}-${data.coord.lon}`)
        toast.error(`Removed ${data.name} from Favourites`);
    } else {
        addFavourite.mutate({
            name: data.name,
            lat: data.coord.lat,
            lon: data.coord.lon,
            country: data.sys.country,
        });
        toast.success(`Added ${data.name} to Favourites`);
    }
   }

  return (
   <Button onClick={handleToggleFavourite} size={"icon"} className={isCurrentFavourite ? "bg-yellow-500 hover:bg-yellow-600": ""} variant={isCurrentFavourite ? "default" : "outline"}>
    <Star className={`h-4 w-4 ${isCurrentFavourite ? "fill-current": ""}`}/>
   </Button>
  )
}

export default FavouritesButton

import {Recipe} from "./recipes";
import Icon from "@mdi/react";
import {mdiAutorenew, mdiHeart} from "@mdi/js";

type Props = {
  recipe: Recipe
  renewRecipe: () => void
  likeRecipe: () => void
}

export function RecipeCard(props: Props) {

  return <div
    className={"flex flex-col flex-grow bg-white border border-gray-300 pb-3 rounded justify-start items-center gap-2"}>
    <div className="relative">
      <img src={props.recipe.img} alt=""/>
      <div
        className="absolute flex justify-between top-0 left-0 w-full h-full transition-colors hover:bg-gray-500/75 hover:text-white text-transparent bg-transparent">
        <div onClick={props.renewRecipe} className="flex items-center justify-center w-1/2 h-full cursor-pointer group">
          <Icon path={mdiAutorenew} size={2} className="group-hover:rotate-180 transition-transform" />
        </div>
        <div onClick={props.likeRecipe} className="flex items-center justify-center w-1/2 h-full cursor-pointer group">
          <Icon path={mdiHeart} size={2} className="group-hover:text-red-500"/>
        </div>
      </div>
    </div>
    <p className="text-center px-2">
      <a className="decoration-0" href={props.recipe.link}>{props.recipe.title}</a>
    </p>
  </div>
}
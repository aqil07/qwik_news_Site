import { component$, useResource$, useStore } from "@builder.io/qwik"
import { Gallery, allArticles, controller } from "~/components/gallery/gallery";
import { allArticlesSchema, stateSchema } from "~/utils/utils";
import { getData } from "../newsFilter/build/dataFetch";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
    const loc = useLocation()

    const localURL = useStore({
        id: loc.href
    })

    const newsResource = useResource$<allArticlesSchema | stateSchema | any>(async ({ track, cleanup }) => {


        track(() => localURL.id)
        // console.log(allArticles);
        cleanup(() => controller.abort('cleanup'))
        const res = await getData(allArticles.href, controller)
        // console.log(res);

        return res
    })

    return (
        <div class='container  rounded'>
        <Gallery data={newsResource.value} />
        </div>
    )

});
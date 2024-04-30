import {component$, Slot} from "@builder.io/qwik";
import type {DocumentHead, RequestHandler} from "@builder.io/qwik-city";
import Sidebar from "~/routes/Sidebar";
import Navbar from "~/routes/Navbar";
import {appName} from "~/variables";

export const onGet: RequestHandler = async ({cacheControl}) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.dev/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    });
};

export default component$(() => {
    return (
        <>
            <Navbar />
            <div class="px-56">
                <div class="flex justify-start align-middle pt-20 divide-x">
                    <div class="w-96 h-screen fixed">
                        <Sidebar/>
                    </div>
                    <div class="ml-96 w-full p-2 bg-gray-50">
                        <Slot/>
                    </div>
                </div>
            </div>
        </>
    );
});

export const head: DocumentHead = ({ head }) => {
    return {
        title: `${head.title} - ${appName}`,
    };
};
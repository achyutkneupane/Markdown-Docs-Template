import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Sidebar from "~/routes/Sidebar";

export const onGet: RequestHandler = async ({ cacheControl }) => {
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
      <div class="w-screen h-screen">
          <div class="mx-56">
              <div class="flex justify-start align-middle">
                  <div class="w-96 border h-screen fixed">
                      <Sidebar />
                  </div>
                  <div class="ml-96">
                      <Slot />
                  </div>
              </div>
          </div>
      </div>
  );
});

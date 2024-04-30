import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
      <>
        <div class="h-screen">
          Test1
        </div>
        <div class="h-screen">
          Test1
        </div>
        <div class="h-screen">
          Test1
        </div>
      </>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

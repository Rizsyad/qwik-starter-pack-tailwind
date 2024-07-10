import { Button } from "@/components/ui";
import type { DocumentHead } from "@builder.io/qwik-city";
import { LuCheck } from '@qwikest/icons/lucide';
import { Select } from '@qwik-ui/headless';
import { component$ } from "@builder.io/qwik"

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};


export default component$(() => {
  const users = ['Tim', 'Ryan', 'Jim', 'Jessie', 'Abby'];


  return (
    <div>
      <Button>Testing</Button>
    </div>
  );
});
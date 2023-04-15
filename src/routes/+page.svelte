<script lang="ts">
  import { CS_RENAME_TYPES, GD_RENAME_TYPES, RENAMES, RenameType, type Rename, CATEGORIES, CATEGORY_NAMES, renameTypeToName } from "$lib/renames";

  let gdscript = true;
  let csharp = true;
  
  let categories: RenameType[] = [...Object.values(CATEGORIES)].flat();

  let search = "";

  const toggleCategory = (category: keyof typeof CATEGORIES) => {
    const prevLen = categories.length;
    categories = categories.filter(c => !CATEGORIES[category].includes(c));

    if (prevLen === categories.length) {
      categories = [
        ...categories,
        ...CATEGORIES[category]
      ];
    }

    filtered = filterSearch(filterCategories(filterLanguages(RENAMES)));
  };

  let num = 0;

  const filterLanguages = (renames: Rename[]) => renames.filter(rename => {
    num++;
    if (!gdscript && GD_RENAME_TYPES.includes(rename.type)) return false;
    if (!csharp && CS_RENAME_TYPES.includes(rename.type)) return false;
    return true;
  });

  const filterCategories = (renames: Rename[]) => renames.filter(rename => categories.includes(rename.type));

  const filterSearch = (renames: Rename[]) => renames.filter(rename => rename.from.toLowerCase().includes(search.toLowerCase()) || rename.to.toLowerCase().includes(search.toLowerCase()) || renameTypeToName(rename.type).toLowerCase().includes(search.toLowerCase()));

  let filtered = RENAMES;

  $: {
    gdscript || csharp || search;

    filtered = filterSearch(filterCategories(filterLanguages(RENAMES)));
  };
</script>

<h1 class="text-3xl text-center font-bold">Godot 3 to Godot 4 Cheatsheet</h1>
<p class="text-center text-gray-300">This is a list of everything that's been renamed from Godot 3 to 4.</p>

<p>Language:
  <label>
    <input type=checkbox bind:checked={gdscript}>
    GDScript
  </label>
  <label>
    <input type=checkbox bind:checked={csharp}>
    C#
  </label>
</p>

<p>Categories:
  {#each Object.keys(CATEGORIES) as category}
    <label>
      <input type="checkbox" on:input={() => toggleCategory(category)} checked>
      {CATEGORY_NAMES[category]}
    </label>
  {/each}
</p>

<p class="mt-1">Search: <input type="text" class="bg-background-600" bind:value={search} /></p>

<table class="mx-auto mt-4">
  <thead>
    <th class="bg-background-800 py-1 rounded-tl-lg">Godot 3 Name</th>
    <th class="bg-background-800 py-1">Godot 4 Name</th>
    <th class="bg-background-800 py-1 rounded-tr-lg">Category</th>
  </thead>
  <tbody>
    {#each filtered as rename, i}
      <tr class:bg-background-600={i % 2 === 0}>
        <td class="font-mono max-w-sm p-2 overflow-auto">{rename.from}</td>
        <td class="font-mono max-w-sm p-2 overflow-auto">{rename.to}</td>
        <td class="p-2 whitespace-nowrap">{renameTypeToName(rename.type)}</td>
      </tr>
    {/each}
  </tbody>
</table>

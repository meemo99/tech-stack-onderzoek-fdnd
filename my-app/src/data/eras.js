export default async function getEras() {
    const res = await fetch(
        "https://fdnd-agency.directus.app/items/teylers_museum_exhibits_sections"
    );
    const { data } = await res.json();
    return data;
}
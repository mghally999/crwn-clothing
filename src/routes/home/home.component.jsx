import Directory from "../../components/directory/directory.component";

function Home() {
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://media.gettyimages.com/id/1339949544/photo/2021-mtv-video-music-awards-arrivals.jpg?s=1024x1024&w=gi&k=20&c=a0YiKWwGx7cbmUHX5gLMsgBtyc_wGIPVvpXgV43I3l8="
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://media.gettyimages.com/id/1142835559/photo/2019-coachella-valley-music-and-arts-festival-weekend-1-day-3.jpg?s=1024x1024&w=gi&k=20&c=RxtLg-9-UcQt1vsRsovs8_nIqCsfnZnf1c3GACuLLDI="
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://media.gettyimages.com/id/1180750356/photo/2019-rolling-loud-new-york.jpg?s=1024x1024&w=gi&k=20&c=isy-RRPeHQB7s55xUmPeDsV1CKv7pP-T4bhZ_ntnb_c="
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://media.gettyimages.com/id/1359692480/photo/miamibash-2021.jpg?s=1024x1024&w=gi&k=20&c=uUWcRzTRzAfGAiQg5NKWrCUYumt_WIImJCYR7wnyYyI="
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://media.gettyimages.com/id/1360637061/photo/playboi-carti-in-concert-atlanta-ga.jpg?s=1024x1024&w=gi&k=20&c=U-A1T6_4drot_gcLldqCxbt36artef9t8-7paAzX71w="
        }
    ];

    return (
        <div>
            <Directory categories={categories} />
        </div>
    );
}

export default Home;

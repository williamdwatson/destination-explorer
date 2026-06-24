import type { destinations_t } from "./types";

export const DESTINATIONS: destinations_t = {
    "Overview": {
        html: `
        <ul>
            <li>An example of what you can do</li>
        </ul>
        `
    },
    "France": {
        icon: "france",
        days: [
            {
                where: "Paris",
                sights: [
                    {
                        what: "Arrive",
                        description: "Go through passport control"
                    },
                    {
                        what: "Effiel Tower",
                        description: "Icon of Paris",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/960px-Tour_Eiffel_Wikimedia_Commons.jpg"
                    },
                    {
                        what: "Champs-Élysées",
                        description: "France's most famous street",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Avenue_des_Champs-Elys%C3%A9es_from_top_of_Arc_de_triomphe_Paris.jpg/960px-Avenue_des_Champs-Elys%C3%A9es_from_top_of_Arc_de_triomphe_Paris.jpg"
                    },
                    {
                        what: "Arc de Triomphe",
                        description: "One of Paris' most famous monuments",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Arc_de_Triomphe_de_l%27%C3%89toile_at_night_vertical_fix.jpg/1280px-Arc_de_Triomphe_de_l%27%C3%89toile_at_night_vertical_fix.jpg"
                    },
                ]
            },
            {
                where: "Paris",
                sights: [
                    {
                        what: "Louvre",
                        description: "One of the world's greatest museums",
                        image: [
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/1280px-Louvre_Museum_Wikimedia_Commons.jpg",
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                        ]
                    },
                    {
                        what: "Sainte-Chapelle",
                        description: "Possibly the most beautiful stained glass anywhere",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sainte_Chapelle_Interior_Stained_Glass.jpg/1280px-Sainte_Chapelle_Interior_Stained_Glass.jpg"
                    }
                ]
            },
            {
                where: "Paris",
                sights: [
                    {
                        what: "Notre Dame",
                        description: "One of the world's most famous churches",
                        image: [
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Notre-Dame_de_Paris_2013-07-24.jpg/960px-Notre-Dame_de_Paris_2013-07-24.jpg",
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Rozeta_Pary%C5%BC_notre-dame_chalger.jpg/1280px-Rozeta_Pary%C5%BC_notre-dame_chalger.jpg"
                        ]
                    },
                    {
                        what: "Orsay Museum",
                        description: "Collection of 19th-century art, including many Impressionists",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg/1280px-Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg"
                    },
                    {
                        what: "Orangerie Museum",
                        description: "Home of Monet's Water Lillies",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Claude_monet%2C_Ninfee_e_Nuvole%2C_1920-1926_%28orangerie%29_00.jpg/1280px-Claude_monet%2C_Ninfee_e_Nuvole%2C_1920-1926_%28orangerie%29_00.jpg"
                    }
                ]
            },
            {
                where: "Paris",
                sights: [
                    {
                        what: "Versailles",
                        description: "Europe's most lavish palace",
                        image: [
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Palace_of_Versailles_June_2010.jpg/1280px-Palace_of_Versailles_June_2010.jpg",
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chateau_Versailles_Galerie_des_Glaces.jpg/1280px-Chateau_Versailles_Galerie_des_Glaces.jpg"
                        ]
                    },
                    {
                        what: "Sacre Coeur",
                        description: "Famous hilltop church",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Cathedral_of_Sacre_Coure%2C_Paris%2C_France.JPG/1280px-Cathedral_of_Sacre_Coure%2C_Paris%2C_France.JPG"
                    }
                ]
            },
            {
                where: "Reims",
                sights: [
                    {
                        what: "Reims Cathedral",
                        description: "One of the finest and most important examples of High Gothic architecture",
                        image: [
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Cathedrale_notre_dame_reims_2023_03.jpg/1280px-Cathedrale_notre_dame_reims_2023_03.jpg",
                            "https://upload.wikimedia.org/wikipedia/commons/8/83/Cath%C3%A9drale_Notre_Dame_de_Reims.jpg"
                        ]
                    },
                    {
                        what: "Verdun",
                        description: "Site of the longest battle of WWI",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/%C3%89glise_de_Verdun_%2809%29.jpg/1280px-%C3%89glise_de_Verdun_%2809%29.jpg"
                    }
                ]
            },
            {
                where: "Bayeux",
                sights: [
                    {
                        what: "Giverny",
                        description: "Monet's home",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Giverny_la_maison_et_les_jardins_du_peintre_%281%29.jpg/1280px-Giverny_la_maison_et_les_jardins_du_peintre_%281%29.jpg"
                    },
                    {
                        what: "Honfleur",
                        description: "Medieval waterfront town",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/20210825_Honfleur_-25.jpg/1280px-20210825_Honfleur_-25.jpg"
                    },
                    {
                        what: "Bayeux",
                        description: "Home of the famous tapestry",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bayeux_Tapestry_scene57_Harold_death.jpg/1280px-Bayeux_Tapestry_scene57_Harold_death.jpg"
                    }
                ]
            },
            {
                where: "Normandy",
                sights: [
                    {
                        what: "D-Day beaches",
                        description: "Landing beaches and cemeteries",
                        image: [
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Normandy_American_Cemetery_ahead_of_the_80th_D-Day_Ceremony_in_Normandy%2C_France%2C_June_6%2C_2024_-_6.jpg/1280px-Normandy_American_Cemetery_ahead_of_the_80th_D-Day_Ceremony_in_Normandy%2C_France%2C_June_6%2C_2024_-_6.jpg",
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Utah_Beach_-_Normandy_-_panoramio_%283%29.jpg/1280px-Utah_Beach_-_Normandy_-_panoramio_%283%29.jpg"
                        ]
                    }
                ]
            },
            {
                where: "Normandy",
                sights: [
                    {
                        what: "Dinan",
                        description: "Medieval town and castle",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dinan_Panorama.jpg/1280px-Dinan_Panorama.jpg"
                    },
                    {
                        what: "Mont St. Michel",
                        description: "Monastery rising from the sea",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mont_St_Michel_in_the_morning.jpg/1280px-Mont_St_Michel_in_the_morning.jpg"
                    }
                ]
            },
            {
                where: "Loire",
                sights: [
                    {
                        what: "Château Chambord",
                        description: "Largest château in the Loire Valley",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chambord_Castle_Northwest_facade.jpg/1280px-Chambord_Castle_Northwest_facade.jpg"
                    },
                    {
                        what: "Château Chenonceau",
                        description: "River-spanning château",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Chateau_de_Chenonceau_2008E.jpg/1280px-Chateau_de_Chenonceau_2008E.jpg"
                    },
                    {
                        what: "Amboise",
                        description: "Small market town that was once home to the French royal court",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Amboise%2C_Blick_vom_gegen%C3%BCberliegenden_Ufer_der_Loire.jpg/1280px-Amboise%2C_Blick_vom_gegen%C3%BCberliegenden_Ufer_der_Loire.jpg"
                    }
                ]
            }
        ]
    }
}
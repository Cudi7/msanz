"use client";

import { useState } from "react";

interface Mood {
  id: string;
  name: string;
  style: string;
}

const moods: Mood[] = [
  { id: "relajado", name: "Relajado", style: "Mediterráneo" },
  { id: "libre", name: "Libre", style: "Boho Chic" },
  { id: "nostalgico", name: "Nostálgico", style: "Vintage" },
  { id: "acogedor", name: "Acogedor", style: "Rústico" },
  { id: "urbano", name: "Urbano", style: "Industrial" },
  { id: "sereno", name: "Sereno", style: "Wabi-Sabi" },
  { id: "equilibrado", name: "Equilibrado", style: "Japandi" },
  { id: "luminoso", name: "Luminoso", style: "Nórdico" },
  { id: "sencillo", name: "Sencillo", style: "Minimalismo" },
  { id: "delicado", name: "Delicado", style: "Shabby Chic" },
];

const subcategories: Record<string, string[]> = {
  relajado: [
    "Sofás",
    "Hamacas",
    "Lámparas de Techo",
    "Blancos y Azules",
    "Madera Natural",
  ],
  libre: [
    "Camas de Madera",
    "Cojines Coloridos",
    "Lámparas de Pie",
    "Rojos y Naranjas",
    "Rattan",
  ],
  nostalgico: [
    "Sillas Retro",
    "Vinilos",
    "Lámparas de Mesa",
    "Verdes y Mostazas",
    "Terciopelo",
  ],
  acogedor: [
    "Mesas Rústicas",
    "Velas",
    "Lámparas de Madera",
    "Tonos Tierra",
    "Piedra",
  ],
  urbano: [
    "Muebles de Metal",
    "Relojes de Pared",
    "Lámparas Industriales",
    "Grises y Negros",
    "Ladrillo",
  ],
  sereno: [
    "Tatamis",
    "Plantas",
    "Lámparas de Arroz",
    "Verdes y Beige",
    "Cerámica",
  ],
  equilibrado: [
    "Estanterías Minimalistas",
    "Jarrones",
    "Lámparas Japonesas",
    "Blancos y Grises",
    "Bambú",
  ],
  luminoso: [
    "Muebles Escandinavos",
    "Espejos",
    "Lámparas de Cristal",
    "Blancos y Claros",
    "Madera Clara",
  ],
  sencillo: [
    "Muebles Funcionales",
    "Organizadores",
    "Lámparas LED",
    "Blancos y Negros",
    "Metal y Vidrio",
  ],
  delicado: [
    "Muebles Antiguos",
    "Flores",
    "Lámparas Vintage",
    "Pasteles y Rosas",
    "Encaje",
  ],
};

export function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null,
  );

  const handleMoodClick = (moodId: string) => {
    setSelectedMood(moodId);
    setSelectedSubcategory(null); // Reset subcategory selection
  };

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleBackClick = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else {
      setSelectedMood(null); // Reset to mood selection
    }
  };

  return (
    <div className="flex flex-col items-center">
      {selectedSubcategory ? (
        <>
          <button
            onClick={handleBackClick}
            className="mb-4 mr-auto text-2xl text-black underline"
          >
            &lt; Back
          </button>
          <h2 className="mb-6 text-3xl font-bold text-black">
            ¿Te gusta la imagen? ¡Contáctanos para más temas premium!
          </h2>
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-64 w-64 items-center justify-center rounded-lg bg-gray-400">
              Aquí va la imagen
            </div>
          </div>
        </>
      ) : selectedMood ? (
        <>
          <button
            onClick={handleBackClick}
            className="mb-4 mr-auto text-2xl text-black underline"
          >
            &lt; Back
          </button>
          <h2 className="mb-6 text-3xl font-bold text-black">
            Subcategorías de {moods.find((m) => m.id === selectedMood)?.name}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {subcategories[selectedMood].map((subcategory) => (
              <div
                key={subcategory}
                className="flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-900/10 p-6 text-black hover:bg-slate-900/20"
                onClick={() => handleSubcategoryClick(subcategory)}
              >
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-400">
                  Aquí la imagen
                </div>
                <h3 className="text-2xl font-bold">{subcategory}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {moods.map((mood) => (
            <div
              key={mood.id}
              className="flex cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-900/10 p-6 text-black hover:bg-slate-900/20"
              onClick={() => handleMoodClick(mood.id)}
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-400">
                Aquí la imagen
              </div>
              <h3 className="text-2xl font-bold">{mood.name}</h3>
              <p className="text-lg">{mood.style}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

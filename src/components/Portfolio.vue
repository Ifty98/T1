<script setup lang="ts">
import { ref, computed } from "vue"
import background from "@/assets/Portfolio/background.webp"

// FILTER STATE
const active = ref("all")

const filters = [
    { key: "all", label: "ALL WORK" },
    { key: "web", label: "WEB DEVELOPMENT" },
    { key: "graphic", label: "GRAPHIC DESIGN" },
    { key: "branding", label: "BRANDING" },
]

// AUTO IMPORT IMAGES
const webImages = Object.values(
    import.meta.glob("@/assets/Portfolio/Web dev/*", {
        eager: true,
        import: "default"
    })
) as string[]

const graphicImages = Object.values(
    import.meta.glob("@/assets/Portfolio/Graphic design/*", {
        eager: true,
        import: "default"
    })
) as string[]

const brandingImages = Object.values(
    import.meta.glob("@/assets/Portfolio/Branding/*", {
        eager: true,
        import: "default"
    })
) as string[]

// BUILD PROJECTS
interface Project {
    id: number
    category: "web" | "graphic" | "branding"
    img: string
}

let id = 1

const projects: Project[] = [
    ...webImages.map(img => ({ id: id++, category: "web" as const, img })),
    ...graphicImages.map(img => ({ id: id++, category: "graphic" as const, img })),
    ...brandingImages.map(img => ({ id: id++, category: "branding" as const, img })),
]
// FILTER FUNCTION
function shuffleArray<T>(array: T[]): T[] {
    const copy = [...array]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[copy[i]!, copy[j]!] = [copy[j]!, copy[i]!]
    }
    return copy
}

const filtered = computed<Project[]>(() => {
    if (active.value === "all") {
        return shuffleArray(projects)
    }
    return projects.filter(p => p.category === active.value)
})

const selectedImage = ref<string | null | undefined>(null)
function selectImage(img: string) {
    selectedImage.value = img
}
</script>

<template>
    <div class="bg-slate-950 text-white flex items-center py-10">

        <div class="relative w-full lg:max-w-screen-xl lg:mx-auto rounded-xl overflow-hidden shadow-2xl bg-cover bg-center"
            :style="{ backgroundImage: `url(${background})` }" data-aos="fade-up">

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/60"></div>

            <!-- Content -->
            <div class="relative flex items-center justify-center text-center
                min-h-[300px] md:min-h-[400px] lg:min-h-[500px] px-6">

                <div>
                    <h2 class="text-2xl md:text-4xl font-bold">
                        WE BUILD <span class="text-orange-400">VISUAL STORIES</span>,<br>
                        WE CODE <span class="text-blue-400">FUNCTIONAL REALITIES</span>
                    </h2>
                    <br>
                    <p class="mt-4 text-gray-200 max-w-md mx-auto">
                        Where aesthetic excellence meets technical precision. We bridge
                        the gap between how your brand looks and how it performs.
                    </p>
                </div>

            </div>

        </div>

    </div>

    <div class="bg-slate-950 min-h-screen text-white py-16">

        <div class="max-w-screen-xl mx-auto px-6">

            <!-- FILTERS -->
            <div class="flex flex-wrap gap-3 mb-10 justify-center" data-aos="fade-up">

                <button v-for="f in filters" :key="f.key" @click="active = f.key"
                    class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                    :class="active === f.key
                        ? 'bg-gradient-to-r from-orange-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'">
                    {{ f.label }}
                </button>

            </div>

            <!-- GRID -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <div v-for="item in filtered" :key="item.id" @click="selectImage(item.img)"
                    class="group relative aspect-[4/5] sm:aspect-[3/4] cursor-pointer" data-aos="fade-up">

                    <!-- CARD -->
                    <div class="w-full h-full bg-black rounded-xl overflow-hidden">

                        <!-- IMAGE -->
                        <div class="w-full h-full flex items-center justify-center">
                            <img :src="item.img"
                                class="max-w-full max-h-full object-contain transition duration-500 group-hover:scale-110" />
                        </div>

                        <!-- OVERLAY -->
                        <div
                            class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <span class="text-white text-lg font-semibold tracking-wide">
                                Project View
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
    <div v-if="selectedImage" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        @click="selectedImage = null">

        <!-- Image -->
        <img :src="selectedImage" class="max-w-full max-h-full object-contain rounded-xl" />
        <button class="absolute top-6 right-6 text-white text-3xl cursor-pointer" @click="selectedImage = null">
            ✕
        </button>
    </div>

</template>

<style scoped></style>

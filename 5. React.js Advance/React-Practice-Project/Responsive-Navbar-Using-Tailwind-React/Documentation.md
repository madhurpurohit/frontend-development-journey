# Documentation How to Build a Navbar.

**Navbar Component:** Breakdown aur Customization Guide
Yeh documentation aapko samjhayega ki humne responsive navigation bar kaise banaya, jismein desktop par ek standard menu aur mobile par ek slide-out sidebar hai.

1. **Mool Dhaarna aur Ranneeti (Core Concept & Strategy)**

Hamara main goal ek aisa Navbar banana tha jo alag-alag screen size par aasani se adapt ho jaaye. Iske liye strategy yeh thi:

- **Ek Component, Do Roop:** Hum ek hi Navbar component banayenge. Iske andar do alag-alag layout honge: ek desktop ke liye aur ek mobile ke liye.

- **CSS se Chhupana aur Dikhana:** Hum Tailwind CSS ke responsive prefixes (jaise md:, hidden) ka istemal karke yeh control karenge ki kaun sa layout kab dikhega. md: (medium breakpoint, 768px) se badi screen par desktop menu dikhega aur mobile wala hamburger icon chhip jayega. Isse chhoti screen par iska ulta hoga.

- **React State se Interactivity:** Mobile menu (sidebar) ko open aur close karne ke liye, hum React ke useState hook ka istemal karenge. Ek state (isOpen) yeh track karega ki menu khula hai ya band.

---

2. **Component ki Sanrachna (JSX Structure)**

Code ko chaar mukhya hisson mein baata gaya hai:

1. **`<header>` (Desktop Menu):**

   - Yeh fixed position par hai taaki scroll karne par bhi upar tika rahe.

   - Iske andar hidden md:flex class lagi hai. Iska matlab hai ki yeh by default chhipa (hidden) rahega, lekin md (medium) screen size ya usse badi screen par flex container ki tarah dikhega.

   - Iske andar navigation links ko map karke display kiya gaya hai.

2. **`<button>` (Mobile Hamburger Icon):**

   - Yeh button mobile view ke liye hai. Is par md:hidden class lagi hai, jiska matlab hai ki yeh md screen ya usse badi screen par chhip jayega.

   - Iske onClick event par toggleMenu function call hota hai, jo isOpen state ko true se false ya false se true karta hai.

   - Iske andar lucide-react ke Menu aur `X` icons ko conditionally render kiya gaya hai. Agar `isOpen` true hai to `X` icon dikhega, warna `Menu` icon.

   - `z-[100]` isey sabse upar rakhta hai, taaki jab sidebar khule to yeh uske upar hi rahe.

3. **`<div>` (Overlay):**

   - Yeh ek halka kaala background hai jo sidebar khulne par poori screen par aa jaata hai.

   - Yeh bhi md:hidden hai, yaani sirf mobile par kaam karega.

   - Iska opacity (paaradarshita) isOpen state par nirbhar karta hai. Jab menu khulta hai, to yeh dikhta hai, warna chhipa rehta hai (pointer-events-none).

   - Is par click karne se bhi menu band ho jaata hai.

4. **`<aside>` (Mobile Sidebar):**

   - Yeh actual slide-out menu hai. Yeh bhi md:hidden hai.

   - Iska transform isOpen state se control hota hai.

     - Jab isOpen false hai, to translate-x-full class isey screen ke right side se poora bahar kar deti hai.

     - Jab isOpen true hai, to translate-x-0 class isey wapas screen ke andar le aati hai.

   - transition-transform aur duration-500 classes is slide effect ko smooth banati hain.

   - Glassmorphism Effect: Yeh effect bg-white/10 (halka safed background), backdrop-blur-xl (background ko blur karna), aur border-l (left border) se achieve kiya gaya hai.

---

3. **Customization Guide (Ise Kaise Modify Karein)**

Ab aap is component ko apne hisaab se aasani se badal sakte hain.

- Anchor Tags par Hover Effect Kaise Badlein?

  Aapko bas `<a>` tag ki className mein hover: wali classes ko badalna hai.

  - Background Color Badalne ke liye:

    - Abhi hai: hover:bg-white/20

    - Naya (light blue): hover:bg-blue-500/30

    - Naya (solid gray): hover:bg-gray-700

  - Text Color Badalne ke liye:

    - Aap hover:text-yellow-300 ya hover:text-cyan-400 jaisi class add kar sakte hain.

  - Underline Effect ke liye:

    - Aap hover:underline class add kar sakte hain. Aap decoration-sky-500 se underline ka color bhi de sakte hain.

  - Example (Naya Hover Effect):

```
// Sidebar ke andar `<a>` tag
className="text-white text-lg font-medium p-4 rounded-lg
           transition-all duration-200 ease-in-out
           hover:bg-sky-500/20 hover:text-sky-300 hover:pl-6"
// Yahan hover par background color, text color, aur left padding badlegi.
```

- **Responsiveness ka Breakpoint Kaise Badlein?**

  Agar aap chahte hain ki hamburger menu lg (large, 1024px) screen par dikhe, to jahan bhi md: prefix laga hai, usey lg: se replace kar dein.

  - Purana: hidden md:flex, md:hidden

  - Naya: hidden lg:flex, lg:hidden

- **Animation ki Speed Kaise Badlein?**

  Sidebar ke slide hone ki speed duration- class se control hoti hai.

  - Abhi hai: duration-500 (500ms)

  - Tez karne ke liye: duration-300

  - Dheema karne ke liye: duration-700

Is guide se aap is component ke har pehlu ko samajh kar use apne project ke anusaar modify kar sakte hain.

---

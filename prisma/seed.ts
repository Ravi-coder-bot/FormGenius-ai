// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   const colorThemes = [
//     {
//       primaryColor: "#2d31fa", // Primary Blue
//       backgroundColor: "#b3b8ff", // Light Blue
//       isDefault: true, // Default Theme
//     },
//     {
//       primaryColor: "#03a9fa", // Primary Orange
//       backgroundColor: "#d9f2fd", // Light Orange
//       isDefault: false,
//     },
//     {
//       primaryColor: "#ff9800", // Primary Green
//       backgroundColor: "#fff0d9", // Light Green
//       isDefault: false,
//     },
//     {
//       primaryColor: "#3f51b5", // Primary Purple
//       backgroundColor: "#eceef8", // Light Purple
//       isDefault: false,
//     },
//     {
//       primaryColor: "#db4437", // Primary Amber
//       backgroundColor: "#fae3e1", // Light Amber
//       isDefault: false,
//     },
//   ];

//   // Clear existing themes (optional)
//   await prisma.colorTheme.deleteMany();

//   // Insert color themes
//   for (const theme of colorThemes) {
//     await prisma.colorTheme.create({ data: theme });
//   }

//   console.log("Color themes seeded successfully!");
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
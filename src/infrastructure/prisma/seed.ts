import { container } from "@/server/lib/di/containter";

export default async function main() {
  // Exemple : création d’utilisateurs
  const userRepository = container?.cradle?.userRepository
  console.log("user",userRepository);
  
  await userRepository.createMany(
    [
      {
        email: 'admin@mail.com',
        name: 'Admin',
      },
      {
        email: 'user@mail.com',
        name: 'User',
        
      },
    ],
    true, // évite les erreurs si déjà existant
  );

  console.log('✅ Seed terminé');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await container.cradle.prisma.$disconnect()
  });
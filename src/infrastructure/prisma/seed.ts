import { container } from "@/infrastructure/di/containter";

export default async function main() {
  // Exemple : création d’utilisateurs
  const scope = container.createScope()
  const userRepository = scope?.resolve("userRepository")
  
  await userRepository.createMany(
    [
      {
        email: 'admin2@mail.com',
        name: 'Admin2',
      },
      {
        email: 'user2@mail.com',
        name: 'User2',
        
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
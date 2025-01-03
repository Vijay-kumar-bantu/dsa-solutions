/*
  Warnings:

  - The primary key for the `Solution` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `problemsId` on the `Solution` table. All the data in the column will be lost.
  - You are about to drop the `Implementation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Problems` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `implementations` to the `Solution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemId` to the `Solution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Implementation" DROP CONSTRAINT "Implementation_solutionId_fkey";

-- DropForeignKey
ALTER TABLE "Problems" DROP CONSTRAINT "Problems_userId_fkey";

-- DropForeignKey
ALTER TABLE "Solution" DROP CONSTRAINT "Solution_problemsId_fkey";

-- AlterTable
ALTER TABLE "Solution" DROP CONSTRAINT "Solution_pkey",
DROP COLUMN "problemsId",
ADD COLUMN     "implementations" JSONB NOT NULL,
ADD COLUMN     "problemId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Solution_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Solution_id_seq";

-- DropTable
DROP TABLE "Implementation";

-- DropTable
DROP TABLE "Problems";

-- CreateTable
CREATE TABLE "Problem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "leetcodeUrl" TEXT NOT NULL,
    "youtubeUrl" TEXT NOT NULL,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserCompletedProblems" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserCompletedProblems_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "Problem_title_idx" ON "Problem"("title");

-- CreateIndex
CREATE INDEX "_UserCompletedProblems_B_index" ON "_UserCompletedProblems"("B");

-- CreateIndex
CREATE INDEX "User_username_idx" ON "User"("username");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Solution" ADD CONSTRAINT "Solution_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCompletedProblems" ADD CONSTRAINT "_UserCompletedProblems_A_fkey" FOREIGN KEY ("A") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCompletedProblems" ADD CONSTRAINT "_UserCompletedProblems_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

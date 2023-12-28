/*
  Warnings:

  - Made the column `ownerId` on table `Phone_numbers` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Phone_numbers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" INTEGER NOT NULL,
    CONSTRAINT "Phone_numbers_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Phone_numbers" ("description", "id", "name", "ownerId", "phone_number") SELECT "description", "id", "name", "ownerId", "phone_number" FROM "Phone_numbers";
DROP TABLE "Phone_numbers";
ALTER TABLE "new_Phone_numbers" RENAME TO "Phone_numbers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

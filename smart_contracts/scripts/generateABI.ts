import { ethers } from "hardhat";
import fs from "fs";

function saveABIFile(fileName: string, content: string, dirPath = "./abi") {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const filePath = `${dirPath}/${fileName}`;

  if (fs.existsSync(filePath)) {
    fs.rmSync(filePath);
  }

  fs.writeFileSync(filePath, content);
}

async function main() {
  const CertificationManagerFactory = await ethers.getContractFactory(
    "CertificationManager"
  );
  const PrescriptionManagerFactory = await ethers.getContractFactory(
    "PrescriptionManager"
  );

  const certificationManagerABI = JSON.stringify(
    CertificationManagerFactory.interface.format()
  );
  const prescriptionManagerABI = JSON.stringify(
    PrescriptionManagerFactory.interface.format()
  );

  saveABIFile("CertificationManager.json", certificationManagerABI);
  saveABIFile("PrescriptionManager.json", prescriptionManagerABI);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

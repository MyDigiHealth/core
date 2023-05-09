import { ethers } from "ethers";
import {
  CERTIFICATION_CONTRACT_ADDRESS,
  PRESCRIPTION_CONTRACT_ADDRESS,
} from "../config";
import CertificationManagerABI from "../abi/CertificationManager.json";
import PrescriptionManagerABI from "../abi/CertificationManager.json";
import { CertificationManager, PrescriptionManager } from "../typechain-types";

const certificationManagerContract = new ethers.Contract(
  CERTIFICATION_CONTRACT_ADDRESS,
  CertificationManagerABI
) as CertificationManager;

const prescriptionManagerContract = new ethers.Contract(
  PRESCRIPTION_CONTRACT_ADDRESS,
  PrescriptionManagerABI
) as PrescriptionManager;

export default async function web3Listeners() {}

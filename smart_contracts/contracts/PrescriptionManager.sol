// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./CertificationManager.sol";

/// @custom:security-contact contact@yashgoyal.dev
contract PrescriptionManager is Pausable, AccessControl {
    struct Prescription {
        uint256 id;
        address patient;
        address doctor;
        bytes cid;
        uint256 expiry;
    }

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    CertificationManager public certificationManager;

    mapping(uint256 => Prescription) public prescriptions;
    mapping(bytes => uint256) public prescriptionIds;
    uint256 public totalPrescriptions;
    error InvalidDoctorLicense();

    constructor(CertificationManager certificationManager_) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        certificationManager = certificationManager_;
    }

    modifier onlyLicensedDoctor() {
        if (
            !certificationManager.isLicenseValid(
                MedicalProfessionalType.doctor,
                msg.sender
            )
        ) revert InvalidDoctorLicense();
        _;
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function prescribe(
        address patientAddress,
        bytes calldata prescriptionCID,
        uint256 expiryDuration
    ) public onlyLicensedDoctor {
        uint256 prescriptionId = ++totalPrescriptions;
        Prescription storage prescription = prescriptions[prescriptionId];
        prescription.id = prescriptionId;
        prescription.patient = patientAddress;
        prescription.doctor = msg.sender;
        prescription.cid = prescriptionCID;
        prescription.expiry = block.timestamp + expiryDuration;
    }

    function validatePrescription(
        bytes calldata prescriptionCID,
        address doctor,
        address patient
    ) public view returns (bool) {
        uint256 prescriptionId = prescriptionIds[prescriptionCID];
        Prescription memory prescription = prescriptions[prescriptionId];
        return
            prescription.doctor == doctor &&
            prescription.patient == patient &&
            prescription.expiry >= block.timestamp;
    }
}

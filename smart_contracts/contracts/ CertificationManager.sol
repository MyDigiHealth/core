// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/// @custom:security-contact contact@yashgoyal.dev
contract CertificationManager is Pausable, AccessControl {
    enum MedicalProfessionalType {
        doctor,
        drogStore
    }

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MEDICAL_VALIDATION_AUTHORITY_ROLE =
        keccak256("MEDICAL_VALIDATION_AUTHORITY_ROLE");

    uint256 public defaultlicenseValidity = 25 * 365 days;
    uint256 public defaultDrugStoreLicenseValidity = 25 * 365 days;

    mapping(MedicalProfessionalType => mapping(address => uint256))
        public licenseValidTill;
    mapping(MedicalProfessionalType => mapping(address => uint256))
        public licenseSuspendedTill;
    mapping(MedicalProfessionalType => mapping(address => bool))
        public licensed;
    mapping(MedicalProfessionalType => mapping(address => bool))
        public licenseRevoked;

    event LicenseGranted(
        MedicalProfessionalType professionalType,
        address authorityAddress,
        address professionalAddress,
        uint256 validity
    );
    event LicenseRevoked(
        MedicalProfessionalType professionalType,
        address authorityAddress,
        address professionalAddress
    );
    event LicenseSuspended(
        MedicalProfessionalType professionalType,
        address authorityAddress,
        address professionalAddress,
        uint256 suspendedTill
    );
    event LicenseUnsuspended(
        MedicalProfessionalType professionalType,
        address authorityAddress,
        address professionalAddress,
        uint256 suspendedTill
    );
    event LicenseUnrevoked(
        MedicalProfessionalType professionalType,
        address authorityAddress,
        address professionalAddress
    );
    event LicenseExtended(
        MedicalProfessionalType professionalType,
        address authorityAddress,
        address professionalAddress,
        uint256 extension,
        uint256 validity
    );

    error AlreadyLicensedError(MedicalProfessionalType professionalType);
    error LicenseRevokedError(MedicalProfessionalType professionalType);
    error NotLicensedError(MedicalProfessionalType professionalType);
    error LicenseExpiredError(MedicalProfessionalType professionalType);
    error LicenseNotRevokedError(MedicalProfessionalType professionalType);
    error LicenseSuspendedError(MedicalProfessionalType professionalType);
    error LicenseNotSuspendedError(MedicalProfessionalType professionalType);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function grantLicense(
        MedicalProfessionalType professionalType,
        address professionalAddress
    ) public onlyRole(MEDICAL_VALIDATION_AUTHORITY_ROLE) {
        if (licensed[professionalType][professionalAddress])
            revert AlreadyLicensedError(professionalType);
        licensed[professionalType][professionalAddress] = true;
        uint256 validity = block.timestamp +
            (
                professionalType == MedicalProfessionalType.doctor
                    ? defaultlicenseValidity
                    : defaultDrugStoreLicenseValidity
            );
        licenseValidTill[professionalType][professionalAddress] = validity;
        emit LicenseGranted(
            professionalType,
            msg.sender,
            professionalAddress,
            validity
        );
    }

    function revokeLicense(
        MedicalProfessionalType professionalType,
        address professionalAddress
    ) public onlyRole(MEDICAL_VALIDATION_AUTHORITY_ROLE) {
        if (!licensed[professionalType][professionalAddress])
            revert NotLicensedError(professionalType);
        if (licenseRevoked[professionalType][professionalAddress])
            revert LicenseRevokedError(professionalType);
        if (
            licenseValidTill[professionalType][professionalAddress] <
            block.timestamp
        ) revert LicenseExpiredError(professionalType);
        licenseRevoked[professionalType][professionalAddress] = true;
        emit LicenseRevoked(professionalType, msg.sender, professionalAddress);
    }

    function extendLicense(
        MedicalProfessionalType professionalType,
        address professionalAddress,
        uint256 extension
    ) public onlyRole(MEDICAL_VALIDATION_AUTHORITY_ROLE) {
        if (!licensed[professionalType][professionalAddress])
            revert NotLicensedError(professionalType);
        uint256 validity = block.timestamp + extension;
        licenseValidTill[professionalType][professionalAddress] = validity;
        emit LicenseExtended(
            professionalType,
            msg.sender,
            professionalAddress,
            extension,
            validity
        );
    }

    function unrevokeLicense(
        MedicalProfessionalType professionalType,
        address professionalAddress
    ) public onlyRole(MEDICAL_VALIDATION_AUTHORITY_ROLE) {
        if (!licensed[professionalType][professionalAddress])
            revert NotLicensedError(professionalType);
        if (!licenseRevoked[professionalType][professionalAddress])
            revert LicenseNotRevokedError(professionalType);
        licenseRevoked[professionalType][professionalAddress] = false;
        emit LicenseUnrevoked(
            professionalType,
            msg.sender,
            professionalAddress
        );
    }

    function suspendLicense(
        MedicalProfessionalType professionalType,
        address professionalAddress,
        uint256 time
    ) public onlyRole(MEDICAL_VALIDATION_AUTHORITY_ROLE) {
        if (!licensed[professionalType][professionalAddress])
            revert NotLicensedError(professionalType);
        if (licenseRevoked[professionalType][professionalAddress])
            revert LicenseRevokedError(professionalType);
        if (
            licenseValidTill[professionalType][professionalAddress] <
            block.timestamp
        ) revert LicenseExpiredError(professionalType);
        if (
            licenseSuspendedTill[professionalType][professionalAddress] >=
            block.timestamp + time
        ) revert LicenseSuspendedError(professionalType);
        licenseSuspendedTill[professionalType][professionalAddress] =
            block.timestamp +
            time;
        emit LicenseSuspended(
            professionalType,
            msg.sender,
            professionalAddress,
            block.timestamp + time
        );
    }

    function unsuspendLicense(
        MedicalProfessionalType professionalType,
        address professionalAddress
    ) public onlyRole(MEDICAL_VALIDATION_AUTHORITY_ROLE) {
        if (!licensed[professionalType][professionalAddress])
            revert NotLicensedError(professionalType);
        if (licenseRevoked[professionalType][professionalAddress])
            revert LicenseRevokedError(professionalType);
        if (
            licenseValidTill[professionalType][professionalAddress] <
            block.timestamp
        ) revert LicenseExpiredError(professionalType);
        if (
            licenseSuspendedTill[professionalType][professionalAddress] <=
            block.timestamp
        ) revert LicenseNotSuspendedError(professionalType);
        licenseSuspendedTill[professionalType][professionalAddress] = block
            .timestamp;
        emit LicenseUnsuspended(
            professionalType,
            msg.sender,
            professionalAddress,
            block.timestamp
        );
    }

    function isLicenseValid(
        MedicalProfessionalType professionalType,
        address professionalAddress
    ) public view returns (bool) {
        return
            licensed[professionalType][professionalAddress] &&
            !licenseRevoked[professionalType][professionalAddress] &&
            (licenseValidTill[professionalType][professionalAddress] >
                block.timestamp) &&
            (licenseSuspendedTill[professionalType][professionalAddress] <
                block.timestamp);
    }
}

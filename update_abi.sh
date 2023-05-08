#!/bin/bash

cd smart_contracts
npx hardhat run ./scripts/generateABI.ts
npx hardhat typechain


delete () {
    if [ -e $1 ]
        then rm -r $1
    fi
}

delete ../frontend/src/abi
delete ../frontend/src/typechain-types
delete ../backend/src/abi
delete ../backend/src/typechain-types

cp -r ./abi ../frontend/src/abi
cp -r ./abi ../backend/src/abi

cp -r ./typechain-types ../frontend/src/typechain-types
cp -r ./typechain-types ../backend/src/typechain-types

echo "updated the abi!"

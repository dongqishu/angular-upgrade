import { NgMetadataUpgradeAdapter } from 'ng-metadata/upgrade';
import { UpgradeAdapter } from '@angular/upgrade';

export const upgradeAdapter = new NgMetadataUpgradeAdapter( UpgradeAdapter );
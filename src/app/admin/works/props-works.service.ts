import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  BasisListGQL,
  ProvenanceListGQL,
  SchoolListGQL,
  TechniqueListGQL,
  CreateBasisGQL,
  CreateBasisLocaleGQL,
  CreateProvenanceGQL,
  CreateProvenanceLocaleGQL,
  CreateSchoolGQL,
  CreateSchoolLocaleGQL,
  CreateTechniqueGQL,
  CreateTechniqueLocaleGQL,
  DeleteBasisGQL,
  DeleteProvenanceGQL,
  DeleteSchoolGQL,
  DeleteTechniqueGQL
} from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class PropsWorksService {

  constructor(
    private basisListGQL: BasisListGQL,
    private provenanceListGQL: ProvenanceListGQL,
    private schoolListGQL: SchoolListGQL,
    private techniqueListGQL: TechniqueListGQL,
    private createBasisGQL: CreateBasisGQL,
    private createBasisLocaleGQL: CreateBasisLocaleGQL,
    private createProvenanceGQL: CreateProvenanceGQL,
    private createProvenanceLocaleGQL: CreateProvenanceLocaleGQL,
    private createSchoolGQL: CreateSchoolGQL,
    private createSchoolLocaleGQL: CreateSchoolLocaleGQL,
    private createTechniqueGQL: CreateTechniqueGQL,
    private createTechniqueLocaleGQL: CreateTechniqueLocaleGQL,
    private deleteBasisGQL: DeleteBasisGQL,
    private deleteProvenanceGQL: DeleteProvenanceGQL,
    private deleteSchoolGQL: DeleteSchoolGQL,
    private deleteTechniqueGQL: DeleteTechniqueGQL
  ) { }

  getBasisList(localeId: string) {
    return this.basisListGQL.watch({localeId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.basis));
  }

  getProvenanceList(localeId: string) {
    return this.provenanceListGQL.watch({localeId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.provenance));
  }

  getSchoolList(localeId: string) {
    return this.schoolListGQL.watch({localeId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.school));
  }

  getTechniqueList(localeId: string) {
    return this.techniqueListGQL.watch({localeId}, {fetchPolicy: 'no-cache'}).valueChanges.pipe(map(({data}) => data.technique));
  }

  createBasisId() {
    return this.createBasisGQL.mutate().pipe(map(({data}) => data));
  }

  createBasisLocale(basisId: string, localeId: string, name: string) {
    return this.createBasisLocaleGQL.mutate({ basisId, localeId, name }).pipe(map(({data}) => data));
  }

  createProvenanceId() {
    return this.createProvenanceGQL.mutate().pipe(map(({data}) => data));
  }

  createProvenanceLocale(provenanceId: string, localeId: string, name: string) {
    return this.createProvenanceLocaleGQL.mutate({ provenanceId, localeId, name }).pipe(map(({data}) => data));
  }

  createSchoolId() {
    return this.createSchoolGQL.mutate().pipe(map(({data}) => data));
  }

  createSchoolLocale(shoolId: string, localeId: string, name: string) {
    return this.createSchoolLocaleGQL.mutate({ shoolId, localeId, name }).pipe(map(({data}) => data));
  }

  createTechniqueId() {
    return this.createTechniqueGQL.mutate().pipe(map(({data}) => data));
  }

  createTechniqueLocale(techniqueId: string, localeId: string, name: string) {
    return this.createTechniqueLocaleGQL.mutate({ techniqueId, localeId, name }).pipe(map(({data}) => data));
  }

  deleteBasis() {
    return this.deleteBasisGQL.mutate().pipe(map(({data}) => data));
  }

  deleteProvenance() {
    return this.deleteProvenanceGQL.mutate().pipe(map(({data}) => data));
  }

  deleteSchool() {
    return this.deleteSchoolGQL.mutate().pipe(map(({data}) => data));
  }

  deleteTechnique() {
    return this.deleteTechniqueGQL.mutate().pipe(map(({data}) => data));
  }
}

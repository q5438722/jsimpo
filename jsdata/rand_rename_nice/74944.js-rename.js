'use strict';
import{
  CsvImporter as CsvImporter
}from "./importer";
import{
  Importers as Importers
}from "../../importer/server";
import{
  CsvImporterInfo as CsvImporterInfo
}from "../lib/info";
Importers.add(new CsvImporterInfo, CsvImporter);


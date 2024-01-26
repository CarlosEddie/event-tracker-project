import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFIltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventoAsync } from "./seletores";


export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventoAsync
})

export const filtroDeEventos = atom<IFIltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})
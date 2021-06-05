import { LABNAMES } from '../constants/application'

export const getChipColor = (lab) => {
    switch(lab) {
        case LABNAMES.APPOLO_DIAGNOSTICS:
            return 'primary';
        case LABNAMES.GENERAL_DIAGNOSTICS:
            return 'secondary';
        default: 
            return 'default';
    }
}
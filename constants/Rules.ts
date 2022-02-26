type LengthProps = {
    value: number
    message: string
}

type RuleType = {
    required?: string
    maxLength?: LengthProps
    minLength?: LengthProps
}

export const categoryTitleRules: RuleType = {
    required: 'Pole niesmie byť prázdne',
    maxLength: {
        value: 20,
        message: 'Názov je príliš dlhý (max 20)'
    },
    minLength: {
        value: 3,
        message: 'Názov je príliš krátky (min 4)'
    }
}

export const taskTitleRules: RuleType = {
    required: 'Pole nesmie byť prázdne',
    minLength: {
        value: 4,
        message: 'Názov je príliš krátky (min 4)'
    },
    maxLength: {
        value: 30,
        message: 'Názov je príliš dlhý (max 30)'
    }
}

export const taskDescriptionRules: RuleType = {
    maxLength: {
        value: 50,
        message: 'Popis je príliš dlhý (max 50)'
    }
}

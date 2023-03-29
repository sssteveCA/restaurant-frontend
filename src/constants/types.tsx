
namespace Types{

    /**
     * ContactsComponent props
     */
    export type ContactsProps = {
        title: string
    }

    /**
     * LabelInputComponent props
     */
    export type LabelInputProps = {
        label_text: string, input_id: string, input_type: string
    }

    export type MenuItem = {
        id: number, link: string, title: string
    }

    /**
     * TwoButtonsComponent props
     */
    export type TwoButtonsProps = {
        buttons: [
            { classes: string, text: string },
            { classes: string, text: string },
        ]
    }
}

export default Types
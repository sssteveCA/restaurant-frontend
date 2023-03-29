
namespace Types{

    /**
     * CheckBoxComponent props
     */
    export type CheckBoxProps = {
        checkbox_id: string, label_text: string
    }

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

    /**
     * LabelTextAreaComponent props
     */
    export type LabelTextAreaProps = {
        label_text: string, textarea_id: string
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
/* eslint-disable import/order */
import "@/utils/highlight";
import { useSettings } from "@/store/settingStore";
import { useThemeToken } from "@/theme/hooks";
import ReactQuill from 'react-quill-new';
import { StyledEditor } from "./styles";
import Toolbar, { formats } from "./toolbar";

interface Props extends ReactQuill.ReactQuillProps {
	sample?: boolean;
}
export default function Editor({
	id = "slash-quill",
	sample = false,
	...other
}: Props) {
	const token = useThemeToken();
	const { themeMode } = useSettings();
	const modules = {
		toolbar: {
			container: `#${id}`,
		},
		history: {
			delay: 500,
			maxStack: 100,
			userOnly: true,
		},
		syntax: true,
		clipboard: {
			matchVisual: false,
		},
	};
	return (
		<StyledEditor $token={token} $thememode={themeMode}>
			<Toolbar id={id} isSimple={sample} />
			<ReactQuill
				modules={modules}
				formats={formats}
				{...other}
				placeholder="Write something awesome..."
			/>
		</StyledEditor>
	);
}

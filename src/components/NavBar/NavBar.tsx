import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;
import { routerMeta } from "@/meta";
import { Link } from "react-router-dom";
import { assignRouteArrayProps } from "@/utils";
import { useIntl } from "react-intl";
import palette from "@/style/palette";

const { primary } = palette

interface INavBarProps {}

const menuStyle = {
	width: "100%",
	display: "flex",
	backgroundColor: primary
};

const defaultMenus = Object.keys(routerMeta).reduce(
	(prev: any[], componentKey: string) => {
		const propsArr: any = assignRouteArrayProps(routerMeta[componentKey]);
		const { path } = assignRouteArrayProps(routerMeta[componentKey]);

		const getPath = (path: string) => (path.match(/\//gi) || []).length;

		const pathWIthSlashLengthArr: any | any[] = Array.isArray(propsArr)
			? propsArr.map(({ path }) => ({ path, length: getPath(path) }))
			: { path, length: getPath(path) };

		if (Array.isArray(pathWIthSlashLengthArr)) {
			const assignPathData = pathWIthSlashLengthArr.reduce(
				(prevArr, { path, length }) => {
					if (length === 1) {
						return [...prevArr, { componentKey, path }];
					} else {
						return prevArr;
					}
				},
				[]
			);
			return [...prev, ...assignPathData];
		} else {
			const { path, length } = pathWIthSlashLengthArr;
			if (length === 1) {
				return [...prev, { componentKey, path }];
			} else {
				return prev;
			}
		}
	},
	[]
);

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
	const { formatMessage: fm } = useIntl();
	return (
		<Layout style={{ flex: 'none' }}>
			<Header className="header" style={{ display: "flex", backgroundColor: primary }}>
				<div
					className="logo"
					style={{
						color: "white",
						width: 250,
						cursor: "pointer",
					}}
				>
					{fm({ id: "title" })}
				</div>
				<Menu
					theme="dark"
					mode="horizontal"
					style={menuStyle}
					activeKey={location.pathname}
					selectable={false}
				>
					{defaultMenus.map(({ componentKey, path }) => (
						<Menu.Item key={path}>
							<Link to={path}>
								{componentKey} ({path})
							</Link>
						</Menu.Item>
					))}
				</Menu>
			</Header>
		</Layout>
	);
};

export default NavBar;

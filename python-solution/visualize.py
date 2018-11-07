import dash
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
from pprint import pprint
from dash.dependencies import Input, Output, State, Event
import plotly.graph_objs as go

app = dash.Dash()

mapbox_access_token = 'https://plot.ly/python/scattermapbox/ --> get mapbox access token from this link'


df = pd.read_csv('../data/with_latlon_1.csv')
df.dropna(axis=0, how='any', inplace=True)

supp_df = pd.read_csv('../data/supplier_with_latlon.csv')
supp_df.columns = ['company_name', 'company_address', 'sup_latlon']

def get_supplier_data(company="H & M, Hennes & Mauritz AB"):

    company_coordinate = [float(el) for el in supp_df.sup_latlon[supp_df.company_name==company].tolist()[0][1:-1].split(',')]


    coordinates = [[float(el[1:-1].split(',')[0]), float(el[1:-1].split(',')[1])] for el in df.supplier_latlon[df.company_name==company].tolist()]

    text = df.supplier_name[df.company_name==company].tolist()

    return coordinates, text, company_coordinate


def get_traces(company="H & M, Hennes & Mauritz AB"):
    traces = []
    coordinates, text, company_coordinate = get_supplier_data(company)
    longitudes = [list(l) for l in (zip(*coordinates))][1]
    latitudes = [list(l) for l in (zip(*coordinates))][0]
    for i in range(len(coordinates)):
        trace = go.Scattermapbox(
            lon=[longitudes[i], company_coordinate[1]],
            lat=[latitudes[i], company_coordinate[0]],
            mode='markers+lines',
            text=[text[i], company],
            marker=dict(size=14,
                        color=["rgb(0, 255, 0)", "rgb(255, 0, 0)"],
                        ),
        )
        traces.append(trace)
    return traces


data=get_traces()

layout = go.Layout(
    autosize=True,
    hovermode='closest',
    mapbox=dict(
        accesstoken=mapbox_access_token,
        bearing=0,
        center=dict(lat=48.289798, lon=32.572110),
        pitch=0,
        zoom=3
    ),
    width=1000,
    height=1000,
    title="Suppliers",
    showlegend=True,
)

fig = dict(data=data, layout=layout)


app.layout = html.Div([
    html.Label("Select the company you want to see"),
    dcc.Dropdown(
        id='companies_dropdown',
        options=[{'label': el, 'value':el} for el in supp_df.company_name.tolist()],
        value="H & M, Hennes & Mauritz AB",
    ),
    dcc.Graph(id='graph', figure=fig),
], style={'width': '1200', 'height':'600'})


@app.callback(Output('graph', 'figure'), [Input('companies_dropdown', 'value')])
def update_graph(value):
    print(value)
    data = get_traces(value)

    layout = go.Layout(
        autosize=True,
        hovermode='closest',
        mapbox=dict(
            accesstoken=mapbox_access_token,
            bearing=0,
            center=dict(lat=48.289798, lon=32.572110),
            pitch=0,
            zoom=3
        ),
        width=1000,
        height=1000,
        title="Suppliers",
        showlegend=True,
    )

    fig = {'data': data, 'layout': layout}
    return fig

if __name__ == '__main__':
    app.run_server(debug=True)
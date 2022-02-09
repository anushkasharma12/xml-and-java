<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <span style="color: #aa6f73;">
                <h1>Catalog</h1>
                </span>
                <ul>
                    <xsl:for-each select="catalog/product">
                        <li>
                            <article style="margin-bottom: 50px;">
                                <hgroup>
                                    <h3 style="display: inline; margin-right: 10px;">
                                        <xsl:value-of select="@product_id"/>
                                    </h3>
                                    <p>
                                        <span style="font-weight: bold;color: #66545e;">
                                            Description : 
                                          </span>
                                        <xsl:value-of select="@description"/>
                                    </p>
                                </hgroup>

                                <span style=" color: #005b96;">
                                <h2>Catalog Items</h2>
                            </span>
                                <table border="3">
                                    <tr bgcolor="#c68642">
                                        <th>Item number</th>
                                        <th>Price</th>
                                        <th>Gender</th>
                                        <th>Small</th>
                                        <th>Medium</th>
                                        <th>Large</th>
                                        <th>Extra Large</th>
                                    </tr>

                                    <xsl:for-each select="catalog_item">
                                        <tr bgcolor="#ffdbac">
                                            <td>
                                                <xsl:value-of select="item_number"/>
                                            </td>
                                            <td>
                                                <xsl:value-of select="price"/>
                                            </td>
                                            <td>
                                                <xsl:choose>
                                                    <xsl:when test="@gender = 'Men'">M</xsl:when>
                                                    <xsl:when test="@gender = 'Women'">w</xsl:when>
                                                </xsl:choose>
                                            </td>
                                            <td>
                                                <xsl select="size">
                                                    <table border="1">
                                                        <xsl:if test="size/@description = 'Small'">
                                                            <tr>
                                                                <th>Color</th>
                                                                <th>Image</th>
                                                            </tr>

                                                            <xsl:for-each select="size[@description='Small']/color_swatch">
                                                                <tr>
                                                                    <td>
                                                                        <xsl:value-of select="." />
                                                                    </td>
                                                                    <td>
                                                                        <xsl:value-of select="./@image" />
                                                                    </td>
                                                                </tr>
                                                            </xsl:for-each>
                                                        </xsl:if>
                                                    </table>
                                                </xsl>
                                            </td>
                                            <td>
                                                <xsl select="size">
                                                    <table border="1">
                                                        <xsl:if test="size/@description = 'Medium'">
                                                            <tr>
                                                                <th>Color</th>
                                                                <th>Image</th>
                                                            </tr>

                                                            <xsl:for-each select="size[@description='Medium']/color_swatch">
                                                                <tr>
                                                                    <td>
                                                                        <xsl:value-of select="." />
                                                                    </td>
                                                                    <td>
                                                                        <xsl:value-of select="./@image" />
                                                                    </td>
                                                                </tr>
                                                            </xsl:for-each>
                                                        </xsl:if>
                                                    </table>
                                                </xsl>
                                            </td>
                                            <td>
                                                <xsl select="size">
                                                    <table  border="1">
                                                        <xsl:if test="size/@description = 'Large'">
                                                            <tr>
                                                                <th>Color</th>
                                                                <th>Image</th>
                                                            </tr>
                                                            <xsl:for-each select="size[@description='Large']/color_swatch">
                                                                <tr>
                                                                    <td>
                                                                        <xsl:value-of select="." />
                                                                    </td>
                                                                    <td>
                                                                        <xsl:value-of select="./@image" />
                                                                    </td>
                                                                </tr>
                                                            </xsl:for-each>
                                                        </xsl:if>
                                                    </table>
                                                </xsl>
                                            </td>
                                            <td>
                                                <xsl select="size">
                                                    <table border="1">
                                                        <xsl:if test="size/@description = 'Extra Large'">
                                                            <tr>
                                                                <th>Color</th>
                                                                <th>Image</th>
                                                            </tr>
                                                            <xsl:for-each select="size[@description='Extra Large']/color_swatch">
                                                                <tr>
                                                                    <td>
                                                                        <xsl:value-of select="." />
                                                                    </td>
                                                                    <td>
                                                                        <xsl:value-of select="./@image" />
                                                                    </td>
                                                                </tr>
                                                            </xsl:for-each>
                                                        </xsl:if>
                                                    </table>
                                                </xsl>
                                            </td>
                                        </tr>
                                    </xsl:for-each>
                                </table>
                            </article>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>